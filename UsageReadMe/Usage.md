# API Usage

## StyleLibrary

The StyleLibrary from the react-native-cascading-styles package provides a convenient way to access and apply predefined styles in React Native applications. It simplifies the process of styling components by offering a collection of commonly used styles such as flex layouts, text styles, and more.

To utilize the StyleLibrary in your project:

1. Import StyleLibrary: Begin by importing the StyleLibrary from react-native-cascading-styles in your component files.

```jsx
import { StyleLibrary } from 'react-native-cascading-styles';
```

2. Access Predefined Styles: Access predefined styles from the StyleLibrary to apply them directly to your components. For example, to apply a flex layout with centered content, you can use:
```jsx
<View style={StyleLibrary.flexCenter}>
  {/* Your component content here */}
</View>
```

3. Customization: Customize the predefined styles by combining them with additional styling properties as needed. For instance, to set a custom background color along with the flex layout, you can do:

```jsx
<View style={[StyleLibrary.flexCenter, { backgroundColor: 'blue' }]}>
  {/* Your component content here */}
</View>
```

For more detailed information and examples on using the StyleLibrary, refer to the [Style Usage Guide](./Style_Usage.md).