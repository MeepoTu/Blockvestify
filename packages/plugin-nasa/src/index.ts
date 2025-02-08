import { Plugin } from "@elizaos/core";
import { getAPODAction } from "./actions/getAPOD.js";
import { getMarsRoverAction } from "./actions/getMarsRoverPhoto.js";

export const meepoNasaPlugin: Plugin = {
    name: "Meepo-NASA",
    description: "Meepo create nasa plugin for photo",
    actions: [getAPODAction, getMarsRoverAction],
    // evaluators analyze the situations and actions taken by the agent. they run after each agent action
    // allowing the agent to reflect on what happened and potentially trigger additional actions or modifications
    evaluators: [],
    // providers supply information and state to the agent's context, help agent access necessary data
    providers: [],
};
export default meepoNasaPlugin;
