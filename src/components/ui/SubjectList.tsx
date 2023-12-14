import { Quiz } from "@/types/Quiz";
import React from "react";
import Subject from "./Subject";

type SubectListProps = {
  subjects: Quiz[];
};

const SubjectList = ({ subjects }: SubectListProps) => {
  return (
    <React.Fragment>
      {subjects.map((subject, i) => (
        <Subject {...{ subject, i }} key={`${subject.title}-${i}`} />
      ))}
    </React.Fragment>
  );
};

export default SubjectList;
