import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Section } from '../../components/Section';
import SectionsList, { Item } from '../../components/SectionsList';
import { ScreenNames } from '../../common/ScreenNames';

const ObjectsScreen: React.FC = () => {

  const ObjectData: Array<Item> = [
    {
      title: 'Basic Object Definition:',
      content: `// Basic object definition
      const person: { name: string; age: number } = {
        name: "John",
        age: 25,
      };`
    },
    {
      title: 'Object Types:',
      content: `// Defining a type for an object
      type Person = {
        name: string;
        age: number;
      };

// Using the defined type
      const person: Person = {
        name: "John",
        age: 25,
      };`
    },
    {
      title: 'Optional Properties:',
      content: `// Object with optional properties
      type Car = {
        make: string;
        model: string;
        year?: number; // Optional property
      };

      const myCar: Car = {
        make: "Toyota",
        model: "Camry",
      };
      `
    },
    {
      title: "Nested Objects:",
      content: `// Object with nested structure
      type Address = {
        street: string;
        city: string;
      };

      type User = {
        name: string;
        age: number;
        address: Address;
      };

      const currentUser: User = {
        name: "Alice",
        age: 30,
        address: {
          street: "123 Main St",
          city: "Anytown",
        },
      };`
    },
  ]

  return (
      <SectionsList data={ObjectData} title={ScreenNames.Objects}/>
  );
}

export default ObjectsScreen
