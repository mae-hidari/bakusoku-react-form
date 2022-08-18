import { LockIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

type LoginFormType = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormType>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (formValue: LoginFormType) => {
    alert(JSON.stringify(formValue));
  };

  return (
    <Center h="100vh">
      <Box
        borderRadius="2xl"
        borderWidth="thin"
        h="60vh"
        p="1.5rem"
        shadow="md"
        w="20rem"
      >
        <Center h="7rem">
          <Icon as={LockIcon} boxSize="2.5rem" color="teal" />
        </Center>
        <chakra.form
          display="flex"
          flexFlow="column"
          gap="1rem"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              placeholder="example@email.com"
              {...register('email', {
                required: 'メールアドレスは必ず入力してください。',
              })}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>パスワード</FormLabel>
            <Input
              placeholder="********"
              {...register('password', {
                required: 'パスワードは必ず入力してください。',
              })}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <Button colorScheme="teal" mt={4} type="submit">
            ログイン
          </Button>
        </chakra.form>
      </Box>
    </Center>
  );
};

export default Login;
