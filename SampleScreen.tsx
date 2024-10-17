import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {toast, Toaster} from 'sonner-native';
function SampleScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          launchImageLibrary({
            mediaType: 'photo',
            presentationStyle: 'fullScreen',
            selectionLimit: 1,
          })
        }>
        <Text>Open Picker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => toast('Hello World')}>
        <Text>Show Toast</Text>
      </TouchableOpacity>
      <Toaster />
    </SafeAreaView>
  );
}

export default SampleScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
