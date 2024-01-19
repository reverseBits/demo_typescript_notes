import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { Section } from './Section';

export interface Item {
  title: string;
  content: string;
}

interface Props {
  data: Item[];
  title: String;
  Footer?: React.FC;
}

const SectionsList: React.FC<Props> = ({ data, title, Footer}) => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.title}
    renderItem={({item}) => <Section title={item.title}>{item.content}</Section>}
    ListHeaderComponent={() => {
      return <Text style={styles.subHeader}>{title}</Text>
    }}
    ListFooterComponent={() => {
      return <>{Footer && <Footer />}</>;
    }}
    
    />
  )
}

export default SectionsList

const styles = StyleSheet.create({
  subHeader: {
    fontSize: 32,
    fontWeight: '700',
    marginLeft: 24,
    marginTop: 20,
    color: '#000',
  },
})