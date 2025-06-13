import { MoviesService } from './movies.service';
import { Movie } from 'generated/prisma';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getMovies(): Promise<Movie[]>;
    gettenRandomMovies(random: string): Promise<Movie[]>;
}
