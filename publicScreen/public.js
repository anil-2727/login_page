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
  Image,
} from "native-base";
import { useForm } from "react-hook-form";

export default function Public() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const PostUser = async (data) => {
    // try {
    //   // console.log(data);

    //   // const {CompanyName,TINNumber,NumberofEmployes,Trailplans,subscriptionsPlans,Address} = data;  //destructing
    //   const requrestOptions = {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       // Authorization:
    //       //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.joQuexm4ctzx8vf21jgx0axt2gxV1awkfzYt1g9LehU",
    //     },
    //     body: JSON.stringify({
    //       email: data.email, //data destructing
    //       password: data.password,
    //     }),
    //   };
    //   console.log(requrestOptions)
    //   const response = await fetch(
    //     "http://localhost:8080/api/login",
    //     requrestOptions
    //   );
    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log(result);
    //   }

    //   // .then((response) => response.json())
    //   // .then((json) => {
    //   //   console.log(json.data);
    //   // })
    //   // .catch((error) => {
    //   //   console.error(error);
    //   // });
    // } catch (error) {
    //   console.log(error);
    // }

    var myHeaders = new Headers();
    // myHeaders.append(
    //   "Authorization",
    //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.joQuexm4ctzx8vf21jgx0axt2gxV1awkfzYt1g9LehU"
    // );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: "anil@gmail.com",
      password: "anil1234",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/login", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const onSubmit = (data) => {
    PostUser(data);
  };
  return (
    <NativeBaseProvider>
      <Box flex={1}>
        <Center mt="60">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>
        </Center>
        <Center mt="10">
          <Image
            source={require("../privateScreen/logo1.png")}
            alt="logo"
            h="150"
            w="200"
          />
        </Center>
        <Center mt="10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack>
              <Box mt="5">
                <FormControl>
                  <FormControl.Label>Email</FormControl.Label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/i,
                    })}
                    placeholder="email"
                  />
                  {errors.email?.type === "required" && "email is required"}
                </FormControl>
              </Box>
              <Box mt="5" mb="5">
                <FormControl>
                  <FormControl.Label>Password</FormControl.Label>
                  <input
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
                    })}
                    placeholder="password"
                  />
                  {errors.password?.type === "required" &&
                    "password is required"}
                </FormControl>
                <Text fontSize={"xs"}>
                  Min 8 char and 1 uppercase and 1 number.
                </Text>
              </Box>

              <input type="submit" />
            </VStack>
          </form>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
