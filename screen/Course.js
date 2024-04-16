import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Courses from './api/Courses';

const Course = () => {
  function Coursecard({ item }) {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode='contain'
            />
          </View>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={Coursecard}
    />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    textAlign: 'center',
    borderRadius: 5,
    shadowColor: '#333', // Updated shadowColor
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: '#344055',
    textTransform: 'uppercase',
    paddingBottom: 15,
    textAlign: 'center',
  },
  description: {
    textAlign: 'left',
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: '#7d7d7d',
  },
});

export default Course;
