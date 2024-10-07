<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('manages', function (Blueprint $table) {
            $table->id('IntentionID'); // Primary Key
            $table->enum('IntentionType', ['Thanksgiving', 'Repose of the Soul']);
            $table->date('DateOfMass');
            $table->enum('TimeOfMass', ['1st', '2nd', '3rd', '4th', '5th', '6th','7th']);
            $table->string('Offerer');
            $table->string('ContactNo')->nullable();
            $table->string('OfferedFor');
            $table->enum('status', ['pending', 'completed'])->default('pending');
            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('updated_by')->constrained('users'); 
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('manages');
    }
};
