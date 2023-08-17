import Predmet from "./predmet.model";

export default interface Student{

    studentId: number;
    ime: string;
    prezime: string;
    brIndeksa: string;
    createdAt: string;
    studentPredmets: Predmet[];
    updateAt: string;
}