import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase";

interface RoomProps {
    id: string,
    name: string,
    type: string
    photo: string
}

export function PhotoList() {
    const [rooms, setRooms] = useState<RoomProps[]>([]);

    useEffect(() => {
        async function fetchRooms() {
            try {
                const roomCollectionRef = collection(firestore, "gallery");
                const roomQuerySnapshot = await getDocs(roomCollectionRef);

                const roomData = roomQuerySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setRooms(roomData);
            } catch (error) {
                console.error("Error fetching rooms: ", error);
            }
        }

        fetchRooms();
    }, []);


    return (
        <section className="pt-24">
            <div className="grid grid-cols-3 gap-4 relative z-10">
                {rooms.map((item) => {
                    return (
                        <div className='bg-[#0f0f0f] shadow-lg p-4 rounded-sm w-96 z-10 space-y-4'>
                            <div className='flex gap-4'>
                                <div className='flex items-center space-x-2 justify-between w-full'>
                                    <h1 className='text-gray-50 font-bold font-inter'>{item.name}</h1>
                                    <span className='bg-blue-600/40 p-2 rounded-md text-blue-400 text-sm'>{item.type}</span>
                                </div>
                            </div>
                            <div className='flex space-y-4 flex-col items-start'>
                                <div className='w-full h-72 relative overflow-hidden rounded-lg'>
                                    <img className='w-full rounded-lg h-auto object-cover absolute inset-0' src={item.photo} />
                                </div>
                                <hr className='border w-full border-zinc-800' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>

    )
}