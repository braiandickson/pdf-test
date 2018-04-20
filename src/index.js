import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'regenerator-runtime/runtime';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/core';
import ReactPDF from '@react-pdf/node';


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const MyApp = () => (
  <div>
    <h1>test</h1>
    <a href="localhost:3000/example.pdf" download>PDF</a>
  </div>
);

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
