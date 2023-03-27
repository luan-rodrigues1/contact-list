export interface IContact {
    id: string;
    name: string;
    email: string;
    cell_phone: string;
    created_at: Date;
    updated_at: Date;
    description?: string | null | undefined;
    profile_picture?: string | null | undefined;
}