import React, { FC, useContext } from 'react'
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  NavigationParams,
  NavigationScreenComponent,
  NavigationScreenConfig,
  NavigationScreenConfigProps,
  NavigationScreenProp,
  NavigationScreenProps,
  NavigationStackScreenOptions,
  NavigationState,
} from 'react-navigation'

import { Feather } from '@expo/vector-icons'

import { Context, PostsInterface } from '../context/BlogContext'

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
  // navigation: NavigationScreenProp<
  // NavigationParams,
  // NavigationScreenConfigProps
  // >
  navigationOptions: NavigationScreenConfig<NavigationStackScreenOptions>
  // navigationOptions: NavigationStackScreenOptions
  // navigationOptions: Record<string, any>
}

const IndexScreen: NavigationScreenComponent<Props> = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context)

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost: PostsInterface) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash-2" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({
  navigation,
}: NavigationScreenProps<Props>) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
})

export default IndexScreen
