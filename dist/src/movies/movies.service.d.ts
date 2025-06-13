import { Movie } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MoviesService {
    private prisma;
    constructor(prisma: PrismaService);
    getMovies(): Promise<Movie[]>;
    getRandomMovies(random: string): Promise<Movie[]>;
}
