/**
 * This class responds to anyone that types !faucet aus and chooses one of the phrases below to respond with at random.
 *
 */
module.exports = {
    name: 'aus', // The name of the command
    description: 'Australia Cash Faucet', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        // List of phrases to respond with
        var phrases = [
            '!tipaus <@' + message.author.id + '> 0.25'
        ];

        message.channel.send(phrases); // Replies to the user with a random phrase
    },
};
