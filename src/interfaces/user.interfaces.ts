import { IContact } from "./contact.interfaces";

export interface IRegisterUser {
    name: string;
    email: string;
    cell_phone: string;
    password: string;
    confirm_password: string
}

export interface IreturnUser {
    id: string;
    name: string;
    email: string;
    cell_phone: string;
    profile_picture: string | null;
    created_at: Date;
    updated_at: Date;
    is_active: boolean;
    deleted_at: (Date | string) | null;
}

export interface IInfoUser {
    id: string;
    name: string;
    email: string;
    cell_phone: string;
    profile_picture: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    is_active: boolean;
    contacts: IContact[];
  }

export interface ILoginUser {
    email: string;
    password: string;
}

export interface IReturnLoginUser {
    token: string;
}