import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Roles } from 'src/auth/enums/roles';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: [String], default: [Roles.USER] })
  roles: Roles[];
}

export const UserSchema = SchemaFactory.createForClass(User);
