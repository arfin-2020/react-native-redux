import React, {useState} from 'react';
import { addTodo, deleteTodo, removeAllTodo } from '../actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Todo = (props) => {
    const [inputText, setInputText] = useState('');
    // console.log(inputText)
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.todoReducers.list)
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>Add you list Here 👍</Text>
            <View style={styles.todoDiv}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="✍️  add items"  
                    value={inputText}                   
                    onChangeText={(text)=>setInputText(text)}
             
                    />
                    <View style={styles.buttonDiv}>
                        <Button onPress={()=>dispatch(addTodo(inputText), setInputText(''))}
                        title='Add' color={'green'} 
                        />
                    </View>
                    <View style={{flexDirection:'row', marginTop: 50}}>
                       {
                           list.map((element)=>{
                           return(
                            <View key={element.id}>
                               <Text >{element.data}</Text>
                               <Button title='Delete'/>
                           </View>
                           )
                           
                           
                        } )
                       }
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        textAlign:'center'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
        width: '80%'
    },
    todoDiv: {
        width: '100%',
    },
    buttonDiv: {
        width: 70,
    }
})
export default Todo;