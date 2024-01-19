import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const TypeDemonstrations: React.FC = () => {
  // Boolean demonstration
  const [isActive, setIsActive] = useState<boolean>(false);

  // Number demonstrations
  const [quantity, setQuantity] = useState<number>();
  const [quantityError, setQuantityError] = useState<string | null>(null);

  // String demonstration
  const [textValue, setTextValue] = useState<string>('');
  const [textValueError, setTextValueError] = useState<string | null>(null);

  // Array demonstration
  const [colors, setColors] = useState<string[]>([]);
  const [newColor, setNewColor] = useState<string>('');
  const [newColorError, setNewColorError] = useState<string | null>(null);

  // Any demonstration
  const [dynamicValue, setDynamicValue] = useState<any>('');
  const [dynamicValueError, setDynamicValueError] = useState<string | null>(
    null,
  );

  const addColor = () => {
    if (newColor.trim() !== '') {
      setColors(prevColors => [...prevColors, newColor]);
      setNewColor('');
      setNewColorError(null);
    } else {
      setNewColorError('Please enter a color');
    }
  };

  const validateNumber = (value: string) => {
    const numberValue = Number(value);
    if (!isNaN(numberValue)) {
      setQuantity(numberValue);
      setQuantityError(null);
    } else {
      setQuantityError('Please enter a valid number');
    }
  };

  const validateTextInput = (value: string) => {
    if (value.trim() !== '') {
      setTextValue(value);
      setTextValueError(null);
    } else {
      setTextValueError('Please enter a valid string');
    }
  };

  const validateAnyValue = (value: string) => {
    setDynamicValue(value);
    setDynamicValueError(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Demonstrations</Text>

      {/* Boolean demonstration */}
      <View style={styles.row}>
        <Text>Boolean Demonstration: {isActive?.toString()}</Text>
        <Button
          title="Toggle Boolean"
          onPress={() => setIsActive(prev => !prev)}
        />
      </View>

      {/* Number demonstration */}
      <View style={styles.row}>
        <Text>Number Demonstration:</Text>
        <TextInput
          placeholder="Enter a number"
          value={quantity?.toString()}
          onChangeText={text => validateNumber(text)}
          keyboardType="numeric"
          style={[styles.input, quantityError ? styles.inputError : null]}
        />
        {quantityError && <Text style={styles.errorText}>{quantityError}</Text>}
        <Text>Entered Number: {quantity}</Text>
      </View>

      {/* String demonstration */}
      <View style={styles.row}>
        <Text>String Demonstration:</Text>
        <TextInput
          placeholder="Enter a string"
          value={textValue}
          onChangeText={text => validateTextInput(text)}
          style={[styles.input, textValueError ? styles.inputError : null]}
        />
        {textValueError && (
          <Text style={styles.errorText}>{textValueError}</Text>
        )}
        <Text>Entered String: {textValue}</Text>
      </View>

      {/* Array demonstration */}
      <View style={styles.row}>
        <Text>Array Demonstration:</Text>
        {colors.map((color, index) => (
          <Text key={index}>{color}</Text>
        ))}
        <TextInput
          placeholder="Add a new color"
          value={newColor}
          onChangeText={text => setNewColor(text)}
          style={[styles.input, newColorError ? styles.inputError : null]}
        />
        <Button title="Add Color" onPress={addColor} />
        {newColorError && <Text style={styles.errorText}>{newColorError}</Text>}
      </View>

      {/* Any demonstration */}
      <View style={styles.row}>
        <Text>Any Demonstration:</Text>
        <TextInput
          placeholder="Enter any value"
          value={dynamicValue?.toString()}
          onChangeText={text => validateAnyValue(text)}
          style={[styles.input, dynamicValueError ? styles.inputError : null]}
        />
        {dynamicValueError && (
          <Text style={styles.errorText}>{dynamicValueError}</Text>
        )}
        <Text>Entered Value: {dynamicValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000'
  },
  row: {
    marginBottom: 16,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginTop: 8,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
});

export default TypeDemonstrations;
