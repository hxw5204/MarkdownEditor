import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  constructor(
    @InjectModel(Note.name) private readonly noteModel: Model<Note>,
  ) {}

  create(createNoteDto: CreateNoteDto) {
    const note = new this.noteModel(createNoteDto);
    return note.save();
  }

  findAll() {
    return this.noteModel.find().exec();
  }

  async findOne(id: string) {
    const note = this.noteModel.findOne({ _id: id }).exec();
    if (!note) {
      throw new NotFoundException(`Note #${id} not found`);
    }
    return note;
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    const existingNote = await this.noteModel
      .findOneAndUpdate({ _id: id }, { $set: updateNoteDto }, { new: true })
      .exec();

    if (!existingNote) {
      throw new NotFoundException(`Note #${id} not found`);
    }
    return existingNote;
  }

  async remove(id: string) {
    const existingNote = await this.findOne(id);
    return existingNote.remove();
  }
}
