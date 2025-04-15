import './global.css';
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Navigation from './src/navigations/Navigation';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/services/queryClient';

export default class App extends Component {
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    );
  }
}
