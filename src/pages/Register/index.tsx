import { useForm, Controller } from "react-hook-form";
import * as z from "zod";

import Button from "@/library/Button";
import Input from "@/library/Input";
import ScreenContainer from "@/library/ScreenContainer";
import Spacing from "@/library/Spacing";
import Header from "@/library/Header";

const schema = z
  .object({
    name: z.string().min(2, "Nome obrigatório"),
    phone: z.string().min(10, "Telefone inválido"),
    birth: z.string().min(8, "Data de nascimento inválida"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function Register() {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Formulário enviado:", data);
  };

  return (
    <ScreenContainer>
      <Header textPage="Crie uma nova conta agora!" />

      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Input label="Nome" placeholder="Seu nome" {...field} />
        )}
      />

      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <Input
            label="Telefone"
            placeholder="(00) 00000-0000"
            keyboardType="phone-pad"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="birth"
        render={({ field }) => (
          <Input
            label="Data de Nascimento"
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoComplete="email"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            label="Senha"
            placeholder="••••••••"
            secureTextEntry
            autoComplete="password"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <Input
            label="Confirme a Senha"
            placeholder="••••••••"
            secureTextEntry
            autoComplete="password"
            {...field}
          />
        )}
      />
      <Spacing size={24} />

      <Button title="Confirmar" onPress={handleSubmit(onSubmit)} />
    </ScreenContainer>
  );
}
