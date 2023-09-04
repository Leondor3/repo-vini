import SectionTitle from "../utils/TitleSection";
import { PhotoList } from "./ListGallery";

export function Character() {
    return (
        <section className="h-full text-center py-32 relative z-10 overflow-x-hidden bg-zinc-950">
            <div className="container">
                <div className="w-full">
                    <SectionTitle title="Soldier" paragraph="Choose Your" />
                    <PhotoList />
                </div>
            </div>
        </section>
    )
}