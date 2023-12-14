import React from "react";
import Container from "@/components/common/Container";
import styled, { ThemeProvider } from "styled-components";
import theme, { ThemeType } from "./theme/theme";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { appSelector } from "./store/features/app/selectors";
import Layout from "./components/layout/Layout";
import data from "@/mocks/data.json";
import Header from "./components/ui/Header";
import Colors from "./theme/colors";
import {
  setAnswers,
  setCurrentIndex,
  setCurrentOption,
  setIsShowNextBtn,
  setProgress,
  setScore,
  setSelectedOption,
} from "./store/features/app/slice";
import OptionList from "./components/ui/OptionList";
import SubjectList from "./components/ui/SubjectList";
import ProgressBar from "./components/ui/ProgressBar";
import Typography from "./components/ui/Typography";
import { SubmitButton } from "./components/ui/SubmitButton";
import Result from "./components/ui/Result";

function App(): JSX.Element {
  const {
    currentIndex,
    selectedOption,
    currentTheme,
    score,
    currentOption,
    isShowNextBtn,
    answers,
    subject,
  } = useAppSelector(appSelector);
  const dispatch = useAppDispatch();

  const questions =
    currentIndex !== -1 ? data.quizzes[currentIndex].questions : [];
  const question = currentIndex !== -1 ? questions[currentOption].question : "";
  const answer = currentIndex !== -1 ? questions[currentOption].answer : "";
  const totalQuestions = questions.length;
  const totalAnswers = answers.length;
  const options = questions[currentOption]?.options;
  const selectedTheme = currentTheme as ThemeType;

  function onSubmit() {
    if (selectedOption !== null) {
      if (selectedOption === answer) {
        dispatch(setScore(score + 1));
      }
      dispatch(setAnswers(selectedOption));
      dispatch(setIsShowNextBtn(true));
    }
  }

  function onClickNext() {
    if (currentOption + 1 < totalQuestions) {
      dispatch(setCurrentOption(currentOption + 1));
      dispatch(setSelectedOption(null));
      dispatch(setIsShowNextBtn(false));
      dispatch(setProgress(10));
    } else {
      dispatch(setCurrentIndex(-1));
      dispatch(setCurrentOption(0));
      dispatch(setSelectedOption(null));
    }
  }

  const selectedSubject = data.quizzes.find((item) => item.title === subject);

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <Layout>
        <Container>
          <div className="header w-full flex flex-col my-3 gap-3 max-w-xl">
            {totalAnswers > totalQuestions ? (
              <div className="text-left w-full">
                <div className="flex flex-col mb-3">
                  <Title tag="h1" type="light" className="md:text-7xl">
                    Quiz completed
                  </Title>
                  <SubTitle tag="h2" type="medium" className="md:text-6xl">
                    You scored...
                  </SubTitle>
                </div>
              </div>
            ) : options && options.length > 0 ? (
              <div className="flex flex-col text-left">
                <Text
                  tag="p"
                  type="italic"
                  className="text-base lg:text-lg mb-10"
                  style={{
                    color:
                      currentTheme === ThemeType.dark
                        ? Colors.lightBluish
                        : Colors.grayNavy,
                  }}
                >
                  Question {currentOption + 1} of {totalQuestions}
                </Text>
                <SubTitle tag="h2" type="medium" className="md:text-4xl">
                  {question}
                </SubTitle>
              </div>
            ) : (
              <Header />
            )}
            {options?.length > 0 && <ProgressBar />}
          </div>
          <div className="flex flex-col w-full mt-6 gap-3">
            {totalAnswers > totalQuestions && selectedSubject ? (
              <Result
                subject={subject}
                selectedSubject={selectedSubject}
                totalQuestions={selectedSubject.questions.length}
              />
            ) : options?.length > 0 ? (
              <OptionList answer={answer} options={options} />
            ) : (
              <SubjectList subjects={data.quizzes} />
            )}
            {selectedOption !== null &&
              (isShowNextBtn ? (
                <SubmitButton
                  className="lg:!h-20 lg:text-xl"
                  onClick={onClickNext}
                >
                  Next Question
                </SubmitButton>
              ) : (
                <SubmitButton
                  className="lg:!h-20 lg:text-xl"
                  onClick={onSubmit}
                >
                  Submit Answer
                </SubmitButton>
              ))}
          </div>
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

const Title = styled(Typography)`
  font-size: 40px;
  font-weight: 100 !important;
  line-height: 100%;
`;

const SubTitle = styled(Typography)``;
const Text = styled(Typography)``;

export default App;
