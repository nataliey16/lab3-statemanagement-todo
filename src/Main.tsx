import React from 'react';
import {View} from 'react-native';
import {useState} from 'react';
import ToDoList from './components/ToDoList';

function Main(): React.JSX.Element {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  return (
    <View>
      <ToDoList tasks={tasks} />
    </View>
  );
}

export default Main;
