// const { Configuration, OpenAIApi } = require('openai');

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const chatGenerator = async (req, res) => {
//   // input prompt coming from client
//   const messages = req.body.apiRequestBody;

//   try {

//     const response = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: messages,
//     });

//     const completion = response.data.choices[0].message;

//     res.status(200).json({
//       success: true,
//       data: completion,
//     });
//   } catch (error) {
//     if (error.response) {
//       console.log(error.response.status);
//       console.log(error.response.data);
//     } else {
//       console.log(error.message);
//     }

//     res.status(400).json({
//       success: false,
//       error: 'Prompt cannot be generated',
//     });
//   }
// };

// module.exports = { chatGenerator };

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const chatGenerator = async (req, res) => {
  // input prompt coming from client
  const messages = req.body.apiRequestBody.messages;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    const response = completion?.data?.choices?.[0].message?.content;

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: 'Prompt cannot be generated',
    });
  }
};

module.exports = { chatGenerator };
