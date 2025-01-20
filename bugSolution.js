The issue appears to be related to timing.  The solution involves introducing a small delay before calling `Linking.openURL()`. This allows the app sufficient time to fully initialize its URL handling capabilities.

```javascript
import * as Linking from 'expo-linking';

async function openURL(url) {
  if (await Linking.canOpenURL(url)) {
    // Add a delay to allow proper initialization before opening the URL
    await new Promise(resolve => setTimeout(resolve, 500)); 
    await Linking.openURL(url);
  } else {
    console.warn('Could not open URL:', url);
  }
}

export default function App() {
  const handlePress = async () => {
    await openURL('myAppScheme://some-path');
  };

  return (
    // ... UI component for handling the button press
  );
}
```