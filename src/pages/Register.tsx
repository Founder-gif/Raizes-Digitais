
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Register = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Cadastro recebido com sucesso! Em breve entraremos em contato.");
  };

  return (
    <div className="py-12 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Cadastre-se como Artesão</h1>
        <p className="mt-2 text-muted-foreground">
          Junte-se à nossa comunidade e amplie o alcance do seu trabalho
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações pessoais</CardTitle>
          <CardDescription>
            Preencha o formulário abaixo com seus dados. Todas as informações são confidenciais.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input id="name" placeholder="João da Silva" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="joao@exemplo.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone / WhatsApp</Label>
                  <Input id="phone" placeholder="(00) 00000-0000" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" placeholder="Sua cidade" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">Estado</Label>
                  <Select required>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Selecione um estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AC">Acre</SelectItem>
                      <SelectItem value="AM">Amazonas</SelectItem>
                      <SelectItem value="AP">Amapá</SelectItem>
                      <SelectItem value="PA">Pará</SelectItem>
                      <SelectItem value="RO">Rondônia</SelectItem>
                      <SelectItem value="RR">Roraima</SelectItem>
                      <SelectItem value="TO">Tocantins</SelectItem>
                      <SelectItem value="MA">Maranhão</SelectItem>
                      <SelectItem value="MT">Mato Grosso</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialty">Especialidade</Label>
                <Select required>
                  <SelectTrigger id="specialty">
                    <SelectValue placeholder="Selecione sua principal atividade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ceramica">Cerâmica</SelectItem>
                    <SelectItem value="tecelagem">Tecelagem</SelectItem>
                    <SelectItem value="cestaria">Cestaria</SelectItem>
                    <SelectItem value="joalheria">Joalheria</SelectItem>
                    <SelectItem value="escultura">Escultura</SelectItem>
                    <SelectItem value="pintura">Pintura</SelectItem>
                    <SelectItem value="instrumentos">Instrumentos Musicais</SelectItem>
                    <SelectItem value="alimentos">Alimentos tradicionais</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Conte um pouco sobre você e seu trabalho</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Descreva sua história, há quanto tempo trabalha com artesanato, técnicas que utiliza, etc." 
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pictures">Fotos do seu trabalho (opcional)</Label>
                <Input id="pictures" type="file" multiple accept="image/*" />
                <p className="text-sm text-muted-foreground mt-1">
                  Você pode enviar até 5 imagens dos seus produtos
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <Input 
                  type="checkbox" 
                  id="terms" 
                  className="h-4 w-4 mt-1 mr-2"
                  required 
                />
                <Label htmlFor="terms" className="text-sm">
                  Concordo com os <a href="#" className="text-amazon-green hover:underline">Termos de Uso</a> e <a href="#" className="text-amazon-green hover:underline">Política de Privacidade</a> do Raízes Digitais
                </Label>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Enviar Cadastro
            </Button>
          </form>
        </CardContent>
        <CardFooter className="border-t pt-6 flex flex-col items-start">
          <p className="text-sm text-muted-foreground mb-2">
            Após enviar seu cadastro, nossa equipe entrará em contato para verificar suas informações e concluir o processo.
          </p>
          <p className="text-sm text-muted-foreground">
            Dúvidas? Entre em contato pelo WhatsApp (92) 99123-4567
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
