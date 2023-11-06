import { createContext, useContext } from "react";

type MultistepFormContextType = {
  selectedForm: string;
};
type MultistepFormProps = {
  children: React.ReactNode;
  selectedForm: string;
};
type MultistepFormPageProps = {
  children: React.ReactNode;
  name: string;
};

const MultistepFormContext = createContext<MultistepFormContextType>(
  {} as MultistepFormContextType
);

export function MultistepForm({ children, selectedForm }: MultistepFormProps) {
  const value: MultistepFormContextType = {
    selectedForm,
  };

  return (
    <MultistepFormContext.Provider value={value}>
      {children}
    </MultistepFormContext.Provider>
  );
}

function MultistepFormPage({ children, name }: MultistepFormPageProps) {
  const context = useContext(MultistepFormContext);

  if (context === undefined) {
    throw new Error("context must be used within a MultistepFormContext");
  }

  return context.selectedForm === name ? <div>{children}</div> : null;
}

MultistepForm.Page = MultistepFormPage;
