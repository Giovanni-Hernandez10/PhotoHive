import { Redirect } from "expo-router";

// default file for the "tab" and redirecting the user to go the album page
export default function TabIndex() {
    return <Redirect href={'/album/'}/>
}