import { model, Schema } from 'mongoose';

const decorationsSchema = new Schema(
  {
    typeOfDecorations: {
      type: String,
      required: true,
      enum: ["Фотозони","Комплексний декор"]
    },
    theme: {
      type: String,
      required: true,
    },
    colors: {
      type: String,
      required: true,
    },
    images: {
        type:String,
        required: false,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const DecorationsCollection = model('decorations', decorationsSchema);
