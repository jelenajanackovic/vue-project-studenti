import type Student from "@/models/student.model";
import axios from "axios";
export default {

    async getAllStudents(){
        return await axios.get<Student[]>("http://localhost:4000/api/student");

    },

    async getStudentByIndex(index: string){
        return await axios.get<Student>("http://localhost:4000/api/student/search/" + index);
    },
    async getStudentById( id: number){
        return await axios.get<Student>("http://localhost:4000/api/student/" + id);
    },
    async addStudent(name:string, lastname:string, brIndeksa: string){
        return await axios.post<Student>("http://localhost:4000/api/student/", {
            ime : name,
            prezime: lastname,
            brIndeksa: brIndeksa
        });
    },

    async updateStudent(id: number, name: string, lastname:string, brIndeksa:string){
        return await axios.put<Student>("http://localhost:4000/api/student/" + id, {
            ime : name,
            prezime: lastname,
            brIndeksa: brIndeksa
        });
    },
    async deleteStudent(id:number){
        return await axios.delete<Student>("http://localhost:4000/api/student/" + id);
    }
}