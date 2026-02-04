import { Injectable, signal, computed } from '@angular/core';
import { Project, PROJECTS } from '../data/projects.data';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private _projects = signal<Project[]>(JSON.parse(JSON.stringify(PROJECTS)));
    private _selectedIndex = signal<number | null>(null);

    projects = computed(() => this._projects());
    selectedProjectIndex = computed(() => this._selectedIndex());

    selectedProject = computed(() => {
        const idx = this._selectedIndex();
        return idx !== null ? this._projects()[idx] : null;
    });

    openProject(index: number) {
        this._selectedIndex.set(index);
        document.body.style.overflow = 'hidden';
    }

    closeAll() {
        this._selectedIndex.set(null);
        document.body.style.overflow = '';
    }

    nextImage() {
        const idx = this._selectedIndex();
        if (idx === null) return;

        this._projects.update(projects => {
            const newProjects = [...projects];
            const p = newProjects[idx];
            p.currentImgIndex = (p.currentImgIndex + 1) % p.images.length;
            return newProjects;
        });
    }

    prevImage() {
        const idx = this._selectedIndex();
        if (idx === null) return;

        this._projects.update(projects => {
            const newProjects = [...projects];
            const p = newProjects[idx];
            p.currentImgIndex = (p.currentImgIndex - 1 + p.images.length) % p.images.length;
            return newProjects;
        });
    }
}
