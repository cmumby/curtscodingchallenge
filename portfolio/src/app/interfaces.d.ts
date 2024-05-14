export interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {}

export interface ClickEvent extends React.MouseEvent<HTMLButtonElement> {}
export interface SelectChangeEvent
  extends React.ChangeEvent<HTMLSelectElement> {}
export interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}
export interface MenuProps {
  logoText: string;
  logoDescriptionHidden: boolean;
}
interface FormLoaderProps {
  title: string;
  progress: number;
}
