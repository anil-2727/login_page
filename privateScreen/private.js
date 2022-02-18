import * as React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Center,
  NativeBaseProvider,
  Divider,
  TextArea,
  ScrollView
} from "native-base";
import { useToast } from 'native-base';
import { useForm } from "react-hook-form";
// import {PostUser} from "../components/auth"


const Private = () => {
  const { register, handleSubmit } = useForm();
  const [details,setDetails]=React.useState({});

  const onSubmit = (data) => {
    setDetails(data);
    console.log(data);
    // PostUser(data)

  };
  return (

    <NativeBaseProvider>
      <Box flex={1}>
        <Center mt="50">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Administrative control
          </Heading>
          <Divider mt="5" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack h="40">
              <Box mt="5" >
                <FormControl w={"400"} >
                  <FormControl.Label>Company Name</FormControl.Label>
                  <input 
                    {...register("CompanyName", {
                      required: true,
                      minLength: 8,
                    })}
                    placeholder="Company Name"
                    p="10"
                  />
                </FormControl>
              </Box>
              <Box mt="5">
                <FormControl>
                  <FormControl.Label>TIN Number</FormControl.Label>
                  <input
                    {...register("TINNumber", {
                      required: true,
                      minLength: 15,
                      maxLength: 15,
                    })}
                    placeholder="TIN Number"
                  />
                </FormControl>
              </Box>
              <Box mt="5">
                <FormControl>
                  <FormControl.Label>Number of Employes</FormControl.Label>
                  <input
                    type="number"
                    {...register("NumberofEmployes", { required: true })}
                    placeholder="Number of Employes"
                  />
                </FormControl>
              </Box>
              <Box mt="5">
                <FormControl>
                  <FormControl.Label>Free Trail Plan</FormControl.Label>
                  <select {...register("Trailplans", { required: true })}>
                    <option value=" 7 Days"> 7 Days</option>
                    <option value="14 Days">14 Days</option>
                  </select>
                  {/* <input
                    {...register("Free Trail Plan", { required: true,minLength: 2})}
                    placeholder="Free Trail Plan"
                  /> */}
                </FormControl>
              </Box>
              <Box mt="5">
                <FormControl>
                  <FormControl.Label>subscriptions Plans</FormControl.Label>
                  <select
                    {...register("subscriptionsPlans", { required: true })}
                  >
                    <option value="1 Month"> 1 Month</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months"> 6 Months</option>
                    <option value="12 Months">12 Months</option>
                  </select>
                  {/* <input
                    {...register("subscriptions Plans", { required: true,minLength: 2 })}
                    placeholder="subscriptions Plans"
                  /> */}
                </FormControl>
              </Box>
              <Box mt="5">
                <FormControl>
                  <FormControl.Label>Address</FormControl.Label>
                  <TextArea placeholderTextColor = {"black"} borderColor={"black"} backgroundColor={"white"}
                    {...register("Address")}
                    placeholder="Address"
                  />
                </FormControl>
              </Box>
              <Box mt="5">
                <FormControl>
                  <FormControl.Label>Contact Details</FormControl.Label>
                  <input
                    type="number"
                    {...register("Contact Details", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    })}
                    placeholder="Contact Details"
                  />
                </FormControl>
              </Box>
              <Box mt="5">
                <input type="submit" />
              </Box>
            </VStack>
          </form>
        </Center>
      </Box>
    </NativeBaseProvider>
  
  );
};

export default Private;
