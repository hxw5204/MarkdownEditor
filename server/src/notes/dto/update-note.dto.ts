import { PartialType } from '@nestjs/swagger';
import { CreateNoteDto } from './create-note.dto';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
  readonly author: string;
  readonly assert: string[];
  readonly content: string;
  readonly updatedAt: string;
  readonly title: string;
}
