<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreManageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'IntentionType' => 'required|in:Thanksgiving,Repose of the Soul', 
            'DateOfMass' => 'required|date|after_or_equal:today',
            'TimeOfMass' => 'required|in:1st,2nd,3rd,4th,5th,6th,7th',
            'Offerer' => 'required|string|max:255', 
            'ContactNo' => 'nullable|string|max:15', 
            'OfferedFor' => 'required|string|max:255', 
            'status' => 'required|in:pending,completed',
        ];
    }
}
