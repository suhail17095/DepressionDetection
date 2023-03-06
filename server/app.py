import numpy as np
from flask import Flask, request, jsonify,  render_template
import pickle
import pandas as pd
import nltk
from nltk.corpus import stopwords
import warnings 
warnings.simplefilter('ignore')
app = Flask(__name__)
model = pickle.load(open('models\depression_detection_model', 'rb'))
nltk.download('stopwords')
stopwords=stopwords.words('english')

#importing models
stemmer= pickle.load(open('models/stem.pkl','rb'))
count_vectorizer= pickle.load(open('models/transform.pkl','rb'))
l= pickle.load(open('models/logisticregression.pkl','rb'))


def remove_stopwords(text):
    clean_text=' '.join([word for word in text.split() if word not in stopwords])
    return clean_text

def clean(data):
  data.replace("@","")
  data.replace(r"http\S+", "")
  data.replace("[^a-zA-Z]", " ")
  data=remove_stopwords(data)
  data=data.lower()
  data=data.split()
  temp=[]
  for word in data:
    if len(word)>=3:
      temp.append(stemmer.stem(word))
  data=temp
  print(data)
  vect=count_vectorizer.transform(data).toarray()
  ans=l.predict(vect)
  return ans

def calculate(msg):
  vect=clean(msg)
  print(vect)
  depress=0
  non_depress=0
  for val in vect:
    if val == 0:
      depress+=1
    else:
      non_depress+=1
  return (depress,non_depress)


@app.route("/tweet",methods=["post"])
def tweet_predict():
    form=request.get_json()
    msg=form.get("message")
    (depress,non_depress) = calculate(msg)
    #print(f"{depress} {non_depress}")
    return jsonify(
        {
            "depress":depress,
            "non_depress":non_depress
        }
    )

def find_age_group(age):
  if age>="26" and age<="30":
    return 1
  elif age>="21" and age<="25":
    return 2
  elif age>="16" and age<="20":
    return 3
  elif age>="31" and age<="35":
    return 4
  elif age>="46" and ag<="50":
    return 5
  elif age>="41" and age<="45":
    return 6
  elif age>="56" and age<="60":
    return 7
  elif age>="36" and age<="40":
    return 8
  elif age>="51" and age<="55":
    return 10
  elif age>="61":
    return 9
  else:
    return 0
@app.route("/predict", methods=['post'])
def api():
    features = request.get_json()
    features=list(features)
    col = ['age', 'gender', 'education',
          'residential place', 'living with', 'debt', 'smoke', 'drink', 'illness',
          'average sleep', 'insomia', 'work pressure', 'anxiety', 'depressed',
          'abused', 'cheat', 'threat', 'sucide', 'lost','profession', 'maritial status']
    features[0]=find_age_group(features[0])
    # print(features[0])
    array_features = pd.DataFrame(features, col)
    prediction = model.predict(array_features.T)
    prediction = prediction[0]
    # print(prediction)
    return jsonify(
        {
        "prediction":int(prediction)
        }
    )


if __name__ == '__main__':
    app.run(debug=True)
