---
'@udecode/plate-core': major
---

**Plugin System**:

Decoupling React in all packages:

- Split build into `@udecode/plate-core` and `@udecode/plate-core/react`
- NEW `SlatePlugin` as the foundation for all plugins
- `PlatePlugin` extends `SlatePlugin` with React-specific plugin features

**Plugin Creation**:

- Remove `createPluginFactory`
- NEW `createSlatePlugin`: vanilla
- NEW `createTSlatePlugin`: vanilla explicitly typed
- NEW `createPlatePlugin`: React
- NEW `createTPlatePlugin`: React explicitly typed
- NEW `toPlatePlugin`: extend a vanilla plugin into a React plugin
- NEW `toTPlatePlugin`: extend a vanilla plugin into a React plugin explicitly typed
- Rename all plugins starting with `createNamePlugin()` to `NamePlugin`

Before:

```typescript
const MyPluginFactory = createPluginFactory({
  key: 'myPlugin',
  isElement: true,
  component: MyComponent,
});
const plugin = MyPluginFactory();
```

After:

```typescript
const plugin = createSlatePlugin({
  key: 'myPlugin',
  node: {
    isElement: true,
    component: MyComponent,
  },
});
const reactPlugin = toPlatePlugin(plugin);
```

**Plugin Configuration**:

- Remove all `NamePlugin` option types, use `NameConfig` instead.
- `NameConfig` as the new naming convention for plugin configurations.

Before:

```typescript
createPluginFactory<HotkeyPlugin>({
  handlers: {
    onKeyDown: onKeyDownToggleElement,
  },
  options: {
    hotkey: ['mod+opt+0', 'mod+shift+0'],
  },
});
```

After:

```typescript
export const ParagraphPlugin = createPlatePlugin({
  key: 'p',
  node: { isElement: true },
}).extend({ editor, type }) => ({
  shortcuts: {
    toggleParagraph: {
      handler: () => {
        editor.tf.toggle.block({ type });
      },
      keys: [
        [Key.Mod, Key.Alt, '0'],
        [Key.Mod, Key.Shift, '0'],
      ],
      preventDefault: true,
    },
  },
})
```

- `toggleParagraph` is now a shortcut for `editor.tf.toggle.block({ type: 'p' })` for the given keys
- Multiple shortcuts can be defined per plugin, and any shortcut can be disabled by setting `shortcuts.toggleParagraph = null`
- Note the typing support using `Key`

**Plugin Properties**:

Rename `SlatePlugin` / `PlatePlugin` properties:

- `type` -> `node.type`
- `isElement` -> `node.isElement`
- `isLeaf` -> `node.isLeaf`
- `isInline` -> `node.isInline`
- `isMarkableVoid` -> `node.isMarkableVoid`
- `isVoid` -> `node.isVoid`
- `component` -> `node.component` or `render.node`
- `props` -> `node.props`
- `overrideByKey` -> `override.plugins`
- `renderAboveEditable` -> `render.aboveEditable`
- `renderAboveSlate` -> `render.aboveSlate`
- `renderAfterEditable` -> `render.afterEditable`
- `renderBeforeEditable` -> `render.beforeEditable`
- `inject.props` -> `inject.nodeProps`
- `inject.props.validTypes` -> `inject.targetPlugins`
- `inject.aboveComponent` -> `render.aboveNodes`
- `inject.belowComponent` -> `render.belowNodes`
- `inject.pluginsByKey` -> `inject.plugins`
- `editor.insertData` -> `parser`
  - NEW `parser.format` now supports `string[]`
  - NEW `parser.mimeTypes: string[]`
- `deserializeHtml` -> `parsers.html.deserializer`
- `deserializeHtml.getNode` -> `parsers.html.deserializer.parse`
- `serializeHtml` -> `parsers.htmlReact.serializer`
- `withOverride` -> `extendEditor`

- All methods now have a single parameter: `SlatePluginContext<C>` or `PlatePluginContext<C>`, in addition to the method specific options. Some of the affected methods are:
  - `decorate`
  - `handlers`, including `onChange`. Returns `({ event, ...ctx }) => void` instead of `(editor, plugin) => (event) => void`
  - `handlers.onChange`: `({ value, ...ctx }) => void` instead of `(editor, plugin) => (value) => void`
  - `normalizeInitialValue`
  - `editor.insertData.preInsert`
  - `editor.insertData.transformData`
  - `editor.insertData.transformFragment`
  - `deserializeHtml.getNode`
  - `deserializeHtml.query`
  - `inject.props.query`
  - `inject.props.transformProps`
  - `useHooks`
  - `withOverrides`

NEW `SlatePlugin` properties:

- `api`: API methods provided by this plugin
- `dependencies`: An array of plugin keys that this plugin depends on
- `node`: Node-specific configuration for this plugin
- `parsers`: Now accept `string` keys to add custom parsers
- `priority`: Plugin priority for registration and execution order
- `shortcuts`: Plugin-specific hotkeys
- `inject.targetPluginToInject`: Function to inject plugin config into other plugins specified by `inject.targetPlugins`

Before:

```typescript
export const createAlignPlugin = createPluginFactory({
  key: KEY_ALIGN,
  inject: {
    props: {
      defaultNodeValue: 'start',
      nodeKey: KEY_ALIGN,
      styleKey: 'textAlign',
      validNodeValues: ['start', 'left', 'center', 'right', 'end', 'justify'],
      validTypes: ['p'],
    },
  },
  then: (_, plugin) =>
    mapInjectPropsToPlugin(editor, plugin, {
      deserializeHtml: {
        getNode: (el, node) => {
          if (el.style.textAlign) {
            node[plugin.key] = el.style.textAlign;
          }
        },
      },
    }),
});
```

After:

```typescript
export const AlignPlugin = createSlatePlugin({
  inject: {
    nodeProps: {
      defaultNodeValue: 'start',
      nodeKey: 'align',
      styleKey: 'textAlign',
      validNodeValues: ['start', 'left', 'center', 'right', 'end', 'justify'],
    },
    targetPluginToInject: ({ editor, plugin }) => ({
      parsers: {
        html: {
          deserializer: {
            parse: ({ element, node }) => {
              if (element.style.textAlign) {
                node[editor.getType(plugin)] = element.style.textAlign;
              }
            },
          },
        },
      },
    }),
    targetPlugins: [ParagraphPlugin.key],
  },
  key: 'align',
});
```

**Plugin Shortcuts**:

- NEW `shortcuts` to add custom hotkeys to a plugin.
- Remove `hotkey` option from all plugins

Before:

```typescript
type LinkPlugin = {
  hotkey?: string;
};
```

After:

```typescript
type LinkConfig = PluginConfig<
  // key
  'p',
  // options
  { defaultLinkAttributes?: any },
  // api
  { link: { getAttributes: (editor: PlateEditor) => LinkAttributes } },
  // transforms
  { floatingLink: { hide: () => void } }
>;
```

Shortcuts API:

- `handler` is called with the editor, event, and event details.
- `keys` is an array of keys to trigger the shortcut.
- `priority` is the priority of the shortcut over other shortcuts.
- `...HotkeysOptions` from `@udecode/react-hotkeys`

**Plugin Types**:

- Update `SlatePlugin`, `PlatePlugin` generics. `P, V, E` -> `C extends AnyPluginConfig = PluginConfig`
- Remove `PluginOptions`
- Remove `PlatePluginKey`
- Remove `HotkeyPlugin`, `ToggleMarkPlugin` in favor of `plugin.shortcuts`
- `WithPlatePlugin` -> `EditorPlugin`, `EditorPlatePlugin`
- `PlatePluginComponent` -> `NodeComponent`
- `InjectComponent*` -> `NodeWrapperComponent*`
- `PlatePluginInsertData` -> `Parser`
- `PlatePluginProps` -> `NodeProps`
- `RenderAfterEditable` -> `EditableSiblingComponent`
- `WithOverride` -> `ExtendEditor`
- `SerializeHtml` -> `HtmlReactSerializer`

**Plugin Store**:

- NEW each plugin has its own store, accessible via `plugin.optionsStore` and `plugin.useOptionsStore`
- `editor` has many methods to get, set and subscribe to plugin options

**Plugin Methods**:

- All plugin methods return a new plugin instance with the extended types.
- Remove `then`, use `extend` instead
- NEW `extend` method to deep merge a plugin configuration
  - If you pass an object, it will be directly merged with the plugin config.
  - If you pass a function, it will be called with the plugin config once the editor is resolved and should return the new plugin config.
  - Object extensions always have the priority over function extensions.
  - Extend multiple times to derive from the result of the previous extension.
- NEW `configure` method to configure the properties of existing plugins. The difference with `extend` is that `configure` with not add new properties to the plugin, it will only modify existing ones.
- NEW `extendPlugin` method to extend a nested plugin configuration.
- NEW `configurePlugin` method to configure the properties of a nested plugin.
- NEW `extendApi` method to extend the plugin API. The API is then merged into `editor.api[plugin.key]`.
- NEW `extendTransforms` method to extend the plugin transforms. The transforms is then merged into `editor.transforms[plugin.key]`.
- NEW `extendEditorApi` method to extend the editor API. The API is then merged into `editor.api`. Use this to add or override top-level methods to the editor.
- NEW `extendEditorTransforms` method to extend the editor transforms. The transforms is then merged into `editor.transforms`.
- NEW `extendOptions` method to extend the plugin options with selectors. Use `editor.useOption(plugin, 'optionKey')` to subscribe to an (extended) option.
- NEW `withComponent` to replace `plugin.node.component`

**Plugin Context**

Each plugin method now receive the plugin context created with `getEditorPlugin(editor, plugin)` as parameter:

- `api`
- `editor`
- `getOption`
- `getOptions`
- `plugin`
- `setOption`
- `setOptions`
- `tf`
- `type`
- `useOption`

**Core Plugins**:

- NEW `ParagraphPlugin` is now part of `core`
- NEW `DebugPlugin` is now part of `core`
  - NEW `api.debug.log`, `api.debug.info`, `api.debug.warn`, `api.debug.error` methods
  - `options.isProduction` to control logging in production environments
  - `options.logLevel` to set the minimum log level
  - `options.logger` to customize logging behavior
  - `options.throwErrors` to control error throwing behavior, by default a `PlateError` will be thrown on `api.debug.error`
- NEW - You can now override a core plugin by adding it to `editor.plugins`. Last plugin wins.
- `createDeserializeHtmlPlugin` -> `HtmlPlugin`
  - NEW `api.html.deserialize`
- `createEventEditorPlugin` -> `EventEditorPlugin`
  - `eventEditorStore` -> `EventEditorStore`
- `createDeserializeAstPlugin` -> `AstPlugin`
- `createEditorProtocolPlugin` -> `SlateNextPlugin`
  - NEW `editor.tf.toggle.block`
  - NEW `editor.tf.toggle.mark`
  - Remove `createNodeFactoryPlugin`, included in `SlateNextPlugin`.
  - Remove `createPrevSelectionPlugin`, included in `SlateNextPlugin`.
- `createHistoryPlugin` -> `HistoryPlugin`
- `createInlineVoidPlugin` -> `InlineVoidPlugin`
- `createInsertDataPlugin` -> `ParserPlugin`
- `createLengthPlugin` -> `LengthPlugin`
- `createReactPlugin` -> `ReactPlugin`

**Editor Creation**:

NEW `withSlate`:

- Extends an editor into a vanilla Plate editor
- NEW `rootPlugin` option for configuring the root plugin

NEW `withPlate`:

- Extends an editor into a React Plate editor
- Now extends `withSlate` with React-specific enhancements
- NEW `useOptions` and `useOption` methods to the editor

NEW `createSlateEditor`:

- Create a vanilla Plate editor with server-side support

`createPlateEditor`:

- Plugin replacement mechanism: using `plugins`, any plugin with the same key that a previous plugin will **replace** it. That means you can now override core plugins that way, like `ReactPlugin`
- `root` plugin is now created from `createPlateEditor` option as a quicker way to configure the editor than passing `plugins`. Since plugins can have nested plugins (think as a recursive tree), `plugins` option will be passed to `root` plugin `plugins` option.
- Centralized editor resolution. Before, both `createPlateEditor` and `Plate` component were resolving the editor. Now, only `createPlateEditor` takes care of that. That means `id`, `value`, and other options are now controlled by `createPlateEditor`.
- Remove `createPlugins`, pass plugins directly:

  - `components` -> `override.components`
  - `overrideByKey` -> `override.plugins`

`createPlateEditor` options:

- Rename `normalizeInitialValue` option to `shouldNormalizeEditor`
- Move `components` to `override.components` to override components by key
- Move `overrideByKey` to `override.plugins` to override plugins by key
- Remove `disableCorePlugins`, use `override.enabled` instead
- NEW `value` to set the initial value of the editor.
- NEW `autoSelect?: 'end' | 'start' | boolean` to auto select the start of end of the editor. This is decoupled from `autoFocus`.
- NEW `selection` to control the initial selection.
- NEW `override.enabled` to disable plugins by key
- NEW `rootPlugin?: (plugin: AnyPlatePlugin) => AnyPlatePlugin` to configure the root plugin. From here, you can for example call `configurePlugin` to configure any plugin.
- NEW `api`, `decorate`, `extendEditor`, `handlers`, `inject`, `normalizeInitialValue`, `options`, `override`, `priority`, `render`, `shortcuts`, `transforms`, `useHooks`. These options will be passed to the very first `rootPlugin`.

**Editor Methods**:

`editor: PlateEditor`:

- Move `redecorate` to `editor.api.redecorate`
- Move `reset` to `editor.api.reset`
- Move `plate.set` to `editor.setPlateState`
- Move `blockFactory` to `editor.api.create.block`
- Move `childrenFactory` to `editor.api.create.value`
- Rename `plugins` to `pluginList`
- Rename `pluginsByKey` to `plugins`
- NEW `getApi()` to get the editor API
- NEW `getTransforms()` to get the editor transforms
- Remove `getPlugin(editor, key)`, use `editor.getPlugin(plugin) or editor.getPlugin({ key })`
- Remove `getPluginType`, use `editor.getType(plugin)` to get node type
- Remove `getPluginInjectProps(editor, key)`, use `editor.getPlugin(plugin).inject.props`
- NEW `getOptionsStore()` to get a plugin options store
- Remove `getPluginOptions`, use `getOptions()`
- NEW `getOption()` to get a plugin option
- NEW `setOption()` to set a plugin option
- NEW `setOptions()` to set multiple plugin options. Pass a function to use Immer. Pass an object to merge the options.
- NEW `useOption` to subscribe to a plugin option in a React component
- NEW `useOptions` to subscribe to a plugin options store in a React component

- Remove `getPlugins`, use `editor.pluginList`
- Remove `getPluginsByKey`, use `editor.plugins`
- Remove `mapInjectPropsToPlugin`

**Editor Types**:

The new generic types are:

- `V extends Value = Value`, `P extends AnyPluginConfig = PlateCorePlugin`
- That means this function will **infer all plugin configurations** from the options passed to it:
  - `key`
  - `options`
  - `api`
  - `transforms`
- Can't infer for some reason? Use `createTPlateEditor` for explicit typing.

```ts
const editor = createPlateEditor({ plugins: [TablePlugin] });
editor.api.htmlReact.serialize(); // core plugin is automatically inferred
editor.tf.insert.tableRow(); // table plugin is automatically inferred
```

**Plate Component**

`PlateProps`:

- `editor` is now required. If `null`, `Plate` will not render anything. As before, `Plate` remounts on `id` change.
- Remove `id`, `plugins`, `maxLength`, pass these to `createPlateEditor` instead
- Remove `initialValue`, `value`, pass `value` to `createPlateEditor` instead
- Remove `editorRef`
- Remove `disableCorePlugins`, override `plugins` in `createPlateEditor` instead

Utils:

- Remove `useReplaceEditor` since `editor` is now always controlled
- NEW `useEditorPlugin` to get the editor and the plugin context.

Types:

- `PlateRenderElementProps`, `PlateRenderLeafProps` generics: `V, N` -> `N, C`

**Plate Store**:

- Remove `plugins` and `rawPlugins`, use `useEditorRef().plugins` instead, or listen to plugin changes with `editor.useOption(plugin, <optionKey>)`
- Remove `value`, use `useEditorValue()` instead
- Remove `editorRef`, use `useEditorRef()` instead

**Miscellaneous Changes**

- `slate >=0.103.0` peer dependency
- `slate-react >=0.108.0` peer dependency
- New dependency `@udecode/react-hotkeys`
- Remove `ELEMENT_`, `MARK_` and `KEY_` constants. Use `NamePlugin.key` instead.
- Replace `ELEMENT_DEFAULT` with `ParagraphPlugin.key`.
- Remove `getTEditor`
- Rename `withTReact` to `withPlateReact`
- Rename `withTHistory` to `withPlateHistory`
- Rename `usePlateId` to `useEditorId`
- Remove `usePlateSelectors().id()`, `usePlateSelectors().value()`, `usePlateSelectors().plugins()`, use instead `useEditorRef().<key>`
- Rename `toggleNodeType` to `toggleBlock`
- `toggleBlock` options:
  - Rename `activeType` to `type`
  - Rename `inactiveType` to `defaultType`
- Remove `react-hotkeys-hook` re-exports. Use `@udecode/react-hotkeys` instead.

Types:

- Move `TEditableProps`, `TRenderElementProps` to `@udecode/slate-react`
- Remove `<V extends Value>` generic in all functions where not used
- Remove `PlatePluginKey`
- Remove `OverrideByKey`
- Remove `PlateId`