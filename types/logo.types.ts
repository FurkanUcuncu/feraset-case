export type ILogoLabel = 'No Style' | 'Monogram' | 'Abstract' | 'Mascot';

export interface ILogoStyle {
    label: ILogoLabel;
    icon: number
}

export interface ICreateLogoParam {
    prompt: string;
    logoStyle: ILogoLabel;
}

export type ILoading = 'loading' | 'success' | 'error' | null;

export interface ILogoInitialState {
    loading: ILoading;
    prompt: string;
    logoStyle: ILogoLabel;
}