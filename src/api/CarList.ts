import {getCars} from "@/api/axiosInstance";

export const fetchCarList = async () => {
    try {
        const { data } = await getCars.get('/cars/list');
        return data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return [];
    }
}



