import { ButtonInteraction, Client } from "discord.js";
import { failedToDMEmbed, successDMEmbed } from "../util/embeds";
import { spawn, Worker, Thread } from "threads";
import verify from "../util/verify";

export const execute = async (client: Client, interaction: ButtonInteraction) => new Promise(async (resolve, reject) => {
    // const reply = await interaction.reply({
    //     embeds: [failedVerificationEmbed(client)],
    //     ephemeral: true
    // });

    // resolve(reply);

    const verifyProcess = await verify(client, interaction);
    if (!verifyProcess) await interaction.reply({
        embeds: [failedToDMEmbed(client)],
        ephemeral: true
    });

    if (verifyProcess) await interaction.reply({
        embeds: [successDMEmbed(client)],
        ephemeral: true
    });

    resolve(true);
});