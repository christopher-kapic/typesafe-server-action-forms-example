"use client"

import { createTsForm, useTsController, useDescription } from "@ts-react/form";
import { z } from "zod";

// create the mapping
const mapping = [
    [z.string(), TextField],
    [z.boolean(), CheckBoxField],
    [z.number(), NumberField],
] as const; // 👈 `as const` is necessary

// A typesafe React component
const Form = createTsForm(mapping);
export default Form;

function generateUniqueId() {
    return `_${Math.random().toString(36).substr(2, 9)}_${Date.now().toString(36)}`;
}





function TextField() {
    const {
        field: { onChange, value },
        error,
    } = useTsController<string>();
    const { label } = useDescription();

    return (
        <div style={{
            width: "100%",
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            display: "flex",
            flexDirection: "column",
        }}>
            <label>{label}</label>
            <input
                style={{
                    borderRadius: "0.25rem",
                }}
                onChange={(e) => onChange(e.target.value)}
                value={value ? value : ""}
            />
            {error && <span style={{ color: "red" }}>{error.errorMessage}</span>}
        </div>
    );
}

function NumberField() {
    const {
        field: { onChange, value },
        error,
    } = useTsController<number>();
    const { label } = useDescription();
    return (
        <div
            style={{
                width: "100%",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <span>{label}</span>
            <input
                value={value !== undefined ? value + "" : ""}
                onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (isNaN(value)) onChange(undefined);
                    else onChange(value);
                }}
            />
            {error && error.errorMessage}
        </div>
    );
}

function CheckBoxField({ name }: { name: string }) {
    const {
        field: { onChange, value },
    } = useTsController<boolean>();

    return (
        <div>
            <label>
                {name}
                <input
                    onChange={(e) => onChange(e.target.checked)}
                    checked={value ? value : false}
                    type="checkbox"
                />
            </label>
        </div>
    );
}