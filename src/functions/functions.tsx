import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const Functions: React.FC = () => {
  const [numberResult, setNumberResult] = useState<number | null>(null);
  const [stringResult, setStringResult] = useState<string | null>(null);
  const [booleanResult, setBooleanResult] = useState<boolean | null>(null);
  const [objectResult, setObjectResult] = useState<object | null>(null);
  const [arrayResult, setArrayResult] = useState<string[] | null>(null);

  // Function for number
  const multiplyNumbers = (a: number, b: number): number => {
    return a * b;
  };

  // Function for string
  const concatenateStrings = (str1: string, str2: string): string => {
    return `${str1} ${str2}`;
  };

  // Function for boolean
  const checkEvenNumber = (num: number): boolean => {
    return num % 2 === 0;
  };

  // Function for object
  const createPersonObject = (name: string, age: number): object => {
    return {name, age};
  };

  // Function for array
  const addColorToArray = (colors: string[], newColor: string): string[] => {
    return [...colors, newColor];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Function Demonstrations</Text>

      {/* Number Function */}
      <View style={styles.row}>
        <Text style={styles.functionTitle}>Multiply Numbers Function</Text>
        <Button
          title="Calculate"
          onPress={() => setNumberResult(multiplyNumbers(5, 3))}
        />
        {numberResult !== null && <Text>Result: {numberResult}</Text>}
      </View>

      {/* String Function */}
      <View style={styles.row}>
        <Text style={styles.functionTitle}>Concatenate Strings Function</Text>
        <Button
          title="Concatenate"
          onPress={() => setStringResult(concatenateStrings('Hello', 'World'))}
        />
        {stringResult !== null && <Text>Result: {stringResult}</Text>}
      </View>

      {/* Boolean Function */}
      <View style={styles.row}>
        <Text style={styles.functionTitle}>Check Even Number Function</Text>
        <Button
          title="Check"
          onPress={() => setBooleanResult(checkEvenNumber(8))}
        />
        {booleanResult !== null && (
          <Text>Result: {booleanResult.toString()}</Text>
        )}
      </View>

      {/* Object Function */}
      <View style={styles.row}>
        <Text style={styles.functionTitle}>Create Person Object Function</Text>
        <Button
          title="Create"
          onPress={() => setObjectResult(createPersonObject('John', 25))}
        />
        {objectResult !== null && (
          <Text>Result: {JSON.stringify(objectResult)}</Text>
        )}
      </View>

      {/* Array Function */}
      <View style={styles.row}>
        <Text style={styles.functionTitle}>Add Color to Array Function</Text>
        <TextInput
          placeholder="Enter a color"
          onChangeText={text =>
            setArrayResult(addColorToArray(['Red', 'Blue'], text))
          }
          style={styles.input}
        />
        {arrayResult !== null && (
          <Text>Result: {JSON.stringify(arrayResult)}</Text>
        )}
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
  },
  row: {
    marginBottom: 16,
  },
  functionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginTop: 8,
  },
});

export default Functions;
