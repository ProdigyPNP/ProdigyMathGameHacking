import { Swal } from "./swal";

export async function GetAction () : Promise<"Copy" | "Remove" | "Restore" | null> {

    const options = new Map<string, string>();
    options.set("Copy", `Copy a slot to another slot`);
    options.set("Remove", `Completley empty one slot`);
    options.set("Restore", ``);

    
    const KennelAction = await Swal.fire({
        input: "select",
        inputOptions: options,
        title: "Select Action",
        text: "Select an action to perform on the Kennel",
    });

    if (!KennelAction.value) return null;


    return KennelAction.value;
}

export async function SelectSlot () : Promise<0 | 1 | 2 | null> {

    const options = new Map<string, string>();
    // sorry if it's unreadable, unminify this yourself. what it does is it get's the pet's name (ex. "Magmayhem"), says "Player" if it's the player, or "null", if it's empty.
    const s = ((num : 0 | 1 | 2) : any => { return (_.player.kennel._petTeam[num]) ? ((_.player.kennel._petTeam[num].source) ? _.player.kennel._petTeam[num].source.name : ((_.player.kennel._petTeam[num]._userDataPlatform) ? "Player" : "null")) : "null"; });
    options.set("0", `[0] Center - ${s(0)}`);
    options.set("1", `[1] Top - ${s(1)}`);
    options.set("2", `[2] Bottom - ${s(2)}`);

    
    const KennelSlot = await Swal.fire({
        input: "select",
        inputOptions: options,
        title: "Select Slot",
        text: "Select a slot to edit",
    });

    if (!KennelSlot.value) return null;
    
    // @ts-expect-error TypeScript doesn't realize that we can only parseInt this into 0, 1, or 2.
    return parseInt(KennelSlot.value);
}