import React from 'react';
import Image from 'next/image';
// import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

// function Title(props) { //propcidades/propriedades<3
//   return <h1>{props.children}</h1>
// }

// const BackgroundImage = styled.div`
//     background-image: url(${db.bg});
//     flex: 1;
//     background-size: cover;
//     background-position: center;
// `;

/*export const RowContainer = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  color: ${db.theme.colors.contrastText};
  background: ${db.theme.colors.secondary};
  font-size: 1em;
  margin-top: 2em;
  padding: 0.25em 6em;
`;*/

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz- Modelo Base</title>
        <meta property="og:image" content={db.bg} />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <Widget.Img>
              <h1>
                <Image src="/images/logoladybug.png" alt="Logo Ladybug" width="300px" height="150px" />
              </h1>
            </Widget.Img>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');

              // router manda para a proxima pagina
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => {
                  console.log(infosDoEvento.target.value);
                  // State
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz o seu nome para jogar!"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Vamos Jogar ${name}!`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p> Perguntas</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
