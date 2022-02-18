import * as React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  Divider,
  TextArea,
  ScrollView
} from "native-base";

/**
 * Handling fetch post process
 */
 const PostUser =  (data) => {
    // const {CompanyName,TINNumber,NumberofEmployes,Trailplans,subscriptionsPlans,Address} = data;  //destructing
    const requrestOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json','Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.joQuexm4ctzx8vf21jgx0axt2gxV1awkfzYt1g9LehU'},
          body: JSON.stringify({
           email:data.email,    //data destructing
           password:data.password
          })
    };
    fetch('http://localhost:8080/api/login',requrestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log( json.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

/**
 * Handling fetch update process
 *
 */

 export const UpdateUser =  () => {
    const requrestOptions = {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json','Authorization':''},
          body: JSON.stringify({
            firstName: '',                   //Updated data
            lastName: ''
          })
    };

    fetch('https:',requrestOptions)         //url with unique id 
    .then((response) => response.json())
    .then((json) => {
      console.log( json.data);
    })
    .catch((error) => {
      console.error(error);
    });
};




/**
 * Handling fetch Get process
 *
 */

 export const GetUser =  () => {
    const requrestOptions = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json','Authorization':''},
          body: JSON.stringify({
            firstName: '',                   //Updated data
            lastName: ''
          })
    };

    fetch('https:',requrestOptions)         //url 
    .then((response) => response.json())
    .then((json) => {
      console.log( json.data);
    })
    .catch((error) => {
      console.error(error);
    });
};



/**
 * Handling fetch Delete process
 *
 */

 export const DeleteUser =  () => {
    const requrestOptions = {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json','Authorization':''},
          body: JSON.stringify({
            firstName: '',                   //Updated data
            lastName: ''
          })
    };

    fetch('https:',requrestOptions)         //url with unique id Whc needs to be deleted
    .then((response) => response.ok)         //response will be in boolean type 
    .catch((error) => {
      console.error(error);
    });
};
