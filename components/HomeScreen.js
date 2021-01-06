import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Image
}from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class HomeScreen extends React.Components{
    constructor() {
        super();
        this.state={
            buttonState:'normal'
          
    }
}

