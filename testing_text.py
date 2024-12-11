import tensorflow as tf

# Load the saved model
model = tf.keras.models.load_model('my_model_ok_use.keras')

def get_mental_health_score(user_input):
    # Convert the user input to a TensorFlow tensor
    user_input_tensor = tf.convert_to_tensor([user_input])

    # Predict using the loaded model
    logits = model.predict(user_input_tensor)

    # Apply sigmoid to convert logits to probabilities
    probabilities = tf.nn.sigmoid(logits).numpy()

    # Calculate the mean probability as the mental health score
    score = np.mean(probabilities) * 100  # Scale to percentage

    return score


user_input = "i new good and happy"
score = get_mental_health_score(user_input)
print(f"Your mental health score is: {score:.2f}%")