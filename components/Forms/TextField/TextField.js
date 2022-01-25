import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import {
  Alert,
  AlertIcon,
  Button,
  Collapse,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import { useState } from "react";
import PasswordStrengthMeter from "../PasswordStrengthMeter/PasswordStrengthMeter ";

const TextField = ({ label, ispass = false, isRequired, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <FormControl
        isInvalid={
          ispass
            ? meta.error && meta.value.length > 0
            : meta.error && meta.touched
        }
        id={field.name}
        isRequired={isRequired}
      >
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          {props.type === "password" ? (
            <>
              <Field
                as={Input}
                {...field}
                {...props}
                type={showPassword ? "text" : "password"}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </>
          ) : (
            <Field as={Input} {...field} {...props} />
          )}
        </InputGroup>
        <Collapse
          in={
            ispass
              ? meta.error && meta.value.length > 0
              : meta.error && meta.touched
          }
          animateOpacity
        >
          <FormErrorMessage>
            <Alert
              status="error"
              variant="subtle"
              rounded={"md"}
              fontWeight={"500"}
            >
              <AlertIcon />
              {meta.error}
            </Alert>
          </FormErrorMessage>
        </Collapse>
      </FormControl>
      {ispass && field.value.length > 0 && (
        <PasswordStrengthMeter password={meta.value} />
      )}
    </>
  );
};

export default TextField;